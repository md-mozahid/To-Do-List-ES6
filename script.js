//DOM SELECTION



//dom selection
const UI = {
    DOMSelection() {
        const formElm = document.querySelector('.formItem')
        const inputElm = document.querySelector('.inputVal')
        const itemListElm = document.querySelector('.itemList')
        const clearBtn = document.querySelector('.clearList')
        const msgElm = document.querySelector('.showMsg')
        let todoItem = []

        return {
            formElm, inputElm,itemListElm, clearBtn, msgElm, todoItem,
        }
    },
    /* ========== Local Storage Start ========== *
    //get data to local storage
    geLocalStorage() {
        const todoStorage = localStorage.getItem('todoItem')
        todoItem = JSON.parse(todoStorage)
        this.getInputValToUi(todoItem)
    },

    //set data to local storage
    setLocalStorage(todoItem) {
        const storage = localStorage.setItem('todoItem', JSON.stringify(todoItem))
        // this.geLocalStorage()
        return storage
    },
    /* ========== Local Storage End ========== */


    //handle items
    handleItem(getVal) {
        const {inputElm, itemListElm} = this.DOMSelection()
        const items = itemListElm.querySelectorAll('.manipulateItem')

        items.forEach((item) => {
            if(item.querySelector('.itemName').textContent === getVal) {
                //complete event listener
                item.querySelector('.editIcon').addEventListener('click', () => {
                    inputElm.value = getVal
                })
            }
        })
    },
    
    //item shown to Ui
    getInputValToUi(getVal) {
        const {itemListElm} = this.DOMSelection()
        const items = `
            <div class='manipulateItem d-flex justify-content-between bg-info py-1 px-2 mb-2 rounded text-center'>
                <h5 class='itemName'>${getVal}</h5>
                <div class='iconItems'>
                    <a class='completeIcon mx-2'><i class="far fa-check-circle"></i></a>
                    <a class='editIcon mx-2'><i class="far fa-edit"></i></a>
                    <a class='deleteIcon mx-2'><i class="far fa-times-circle"></i></a>
                </div>
            </div>`
        itemListElm.insertAdjacentHTML("beforeend", items)
        this.handleItem(getVal)
    },
    //show warning message
    showMessage(msg) {
        const {msgElm} = this.DOMSelection()
        const elm = `<div class='alert alert-danger message'>${msg}</div>`
        msgElm.insertAdjacentHTML("afterbegin", elm)
    },

    //validation
    validation(getVal) {
        const {todoItem} = this.DOMSelection()
        if(getVal === '') {
            this.showMessage('Please fill the inputs')
        }else {
            todoItem.push(getVal)
            //item shown to UI
            // this.getInputValToUi(getVal)
            //set data to local storage
            // this.setLocalStorage(todoItem)
        }
    },

    //handle event listener
    init() {
        const {formElm, inputElm} = this.DOMSelection()
        formElm.addEventListener('submit', (evt) => {
            evt.preventDefault()

            //getting input value
            const getVal = inputElm.value
            // console.log(getVal);
            //validation
            this.validation(getVal)
            // //item shown to UI
            this.getInputValToUi(getVal)
            
        })
        window.addEventListener('DOMContentLoaded', () => {
            
        })
    },
}
UI.init()