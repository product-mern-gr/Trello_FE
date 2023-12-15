import { React, useCallback, useState, useEffect, useRef } from "react";
import { Container, Draggable } from "react-smooth-dnd";
import { Dropdown, Form, Button } from "react-bootstrap";
import { cloneDeep } from "lodash";

import './Column.scss';
import Card from "../Card/Card";
import ConfirmModal from "../Common/ConfirmModal";
import { mapOrder } from "../../utilities/sort";
import { MODAL_ACTION_CONFIRM } from "../../utilities/constants";
import { saveContentAfterPressEnter, selectAllInlineText } from "../../utilities/contentEditable";

function Column(props) {

  const { column, onCardDrop, onUpdateColumn, onAddNewCardToColumn } = props
  const cards = mapOrder(column.cards, column.cardOrder, 'id')

  const [showConfirmModal, setShowConfirmModal] = useState(false)
  const toggleShowConfirmModal = () => setShowConfirmModal(!showConfirmModal)

  const [columnTitle, setColumnTitle] = useState('')

  const [openNewCardForm, setOpenNewCardForm] = useState(false)
  const toggleOpenNewCardForm = () => setOpenNewCardForm(!openNewCardForm)

  const handleColumnTitleChange = useCallback((e) => setColumnTitle(e.target.value), [])
  const handleColumnTitleBlur = () => {
    console.log(columnTitle)
    const newColumn = {
      ...column,
      title: columnTitle
    }    
    onUpdateColumn(newColumn)  
  }

  const newCardTextareaRef = useRef(null)

  const [newCardTitle, setNewCardTitle] = useState('')
  const handleCardTitleChange = (e) => setNewCardTitle(e.target.value)

  const addNewCard = () => {
    if(!newCardTitle) {
      newCardTextareaRef.current.focus()
      return
    }
    
    const newCardToAdd = {
      id: Math.random().toString(36).substring(2, 5), //5 random characters will removed when we implement code api
      boardId: column.boardId,
      columnId: column.id,
      title: newCardTitle.trim(),
      cover: null
    }

    let newColumn = cloneDeep(column)
    newColumn.cards.push(newCardToAdd)
    newColumn.cardOrder.push(newCardToAdd.id)

    onAddNewCardToColumn(newColumn)
    setNewCardTitle('')
    toggleOpenNewCardForm()
  }
  
  useEffect(() => {
    setColumnTitle(column.title)
  }, [column.title]);

  useEffect(() => {
    if (newCardTextareaRef && newCardTextareaRef.current) {
      newCardTextareaRef.current.focus()
      newCardTextareaRef.current.select()
    }
  }, [openNewCardForm])

  const onConfirmModalAction = (type) => {
    if (type === MODAL_ACTION_CONFIRM) {
      const newColumn = {
        ...column,
        _destroy: true,
      }    
      onUpdateColumn(newColumn)  
    }
    toggleShowConfirmModal()
  }

  return (
    <div className='column'>
      <header className="column-drag-handle">
        <div className="column-title">
          <Form.Control 
            size="sm" 
            type="text" 
            placeholder="Enter column title..." 
            className="trello-content-editable"
            value={columnTitle}
            onChange={handleColumnTitleChange}
            onBlur={handleColumnTitleBlur}
            onKeyDown={saveContentAfterPressEnter}
            onClick={selectAllInlineText}
            onMouseDown={e => e.preventDefault()}
            spellCheck="false"
          />
        </div>
        <div className="column-dropdown-actions">
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic" size="sm" className="dropdown-btn" />

            <Dropdown.Menu>
              <Dropdown.Item onClick={toggleOpenNewCardForm}>Add card...</Dropdown.Item>
              <Dropdown.Item onClick={toggleShowConfirmModal}>Remove column</Dropdown.Item>
              <Dropdown.Item onClick={toggleShowConfirmModal}>Move all cards in this column (beta)...</Dropdown.Item>
              <Dropdown.Item onClick={toggleShowConfirmModal}>Archive all cards (beta)...</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </header>
      <div className="card-list">
      <Container
        orientation="vertical" //default
        groupName="col"
        onDrop={dropResult => onCardDrop(column.id, dropResult)}
        getChildPayload={index => cards[index]}
        dragClass="card-ghost"
        dropClass="card-ghost-drop"
        dropPlaceholder={{
          animationDuration: 150,
          showOnTop: true,
          className: 'card-drop-preview' 
        }}
        dropPlaceholderAnimationDuration={200}
        >
        {cards.map((card, index) => (
          <Draggable key={index}>
            <Card card={card} />
          </Draggable>
        ))}
        </Container>
        {openNewCardForm && 
          <div className="add-new-card-area">
            <Form.Control 
              size="sm" 
              as="textarea" 
              rows="3"
              placeholder="Enter a title for this card..." 
              className="textarea-enter-new-card"
              ref={newCardTextareaRef}
              value={newCardTitle}
              onChange={handleCardTitleChange}
              onKeyDown={event => (event.key === 'Enter') && addNewCard()}
            />
          </div>
        }
      </div>
      <footer>
      {openNewCardForm && 
          <div className="add-new-card-actions">
            <Button variant="success" size="sm" onClick={addNewCard}>Add card</Button>
            <span className="cancle-icon" onClick={toggleOpenNewCardForm}>
              <i className="fa fa-trash icon" ></i>
            </span>
          </div>
        }
        {!openNewCardForm &&
          <div className="footer-actions" onClick={toggleOpenNewCardForm}>
            <i className="fa fa-plus icon" /> Add another card
          </div>
        }
      </footer>

      <ConfirmModal 
        show={showConfirmModal}
        onAction={onConfirmModalAction}
        title="Remove column"
        content={`Are you sure you want to remove <strong>${column.title}</strong>!<br>All related cards will also be removed!`}
      ></ConfirmModal>
    </div>    
  )
}

export default Column