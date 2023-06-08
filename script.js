document.addEventListener("DOMContentLoaded", function() {            // DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
    const items = document.querySelectorAll(".item");
    const container2 = document.getElementById("container2");
    const resetBtn = document.getElementById("resetBtn");
  
    items.forEach(function(item) {                                     // forEach() method executes a provided function once for each array element.
      item.addEventListener("dragstart", dragStart);                     // The dragstart event is fired when the user starts dragging an element or text selection.
      item.addEventListener("dragend", dragEnd);                      // The dragend event is fired when the user releases the mouse button during a drag-and-drop operation.
    });
  
    container2.addEventListener("dragover", dragOver);          // The dragover event is fired when an element or text selection is being dragged over a valid drop target (every few hundred milliseconds).
    container2.addEventListener("dragenter", dragEnter);        // The dragenter event is fired when a dragged element or text selection enters a valid drop target.
    container2.addEventListener("dragleave", dragLeave);        // The dragleave event is fired when a dragged element or text selection leaves a valid drop target.
    container2.addEventListener("drop", dragDrop);              // The drop event is fired when an element or text selection is dropped on a valid drop target.
  
    resetBtn.addEventListener("click", resetContainers);            // The click event is fired when a pointing device button (usually a mouse's primary button) is pressed and released on a single element.
  
    let draggedItem = null;
  
    function dragStart() {                                       // The dragstart event is fired when the user starts dragging an element or text selection.    
      draggedItem = this;
      setTimeout(function() {                                       // The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.
        draggedItem.style.display = "none";                         // The display property sets or returns the element's display type.
      }, 0);
    }
  
    function dragEnd() {                                           // The dragend event is fired when the user releases the mouse button during a drag-and-drop operation
      setTimeout(function() {                                       // The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.
        draggedItem.style.display = "block";                        // The display property sets or returns the element's display type.
        draggedItem = null;                                         // The null keyword is a primitive data type that represents the intentional absence of any object value.
      }, 0);
    }
  
    function dragOver(e) {                                          // The dragover event is fired when an element or text selection is being dragged over a valid drop target (every few hundred milliseconds).
      e.preventDefault();                                           // The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
    }
  
    function dragEnter(e) {                                         // The dragenter event is fired when a dragged element or text selection enters a valid drop target.
      e.preventDefault();
      this.classList.add("hovered");                                 // The classList property returns the class name(s) of an element, as a DOMTokenList object.
    }
  
    function dragLeave() {                                          // The dragleave event is fired when a dragged element or text selection leaves a valid drop target.
      this.classList.remove("hovered");                             // The classList property returns the class name(s) of an element, as a DOMTokenList object.
    }
  
    function dragDrop() {                                           // The drop event is fired when an element or text selection is dropped on a valid drop target.
      this.classList.remove("hovered");                             // The classList property returns the class name(s) of an element, as a DOMTokenList object.
      this.appendChild(draggedItem);                                 // The appendChild() method appends a node as the last child of a node.
     document.getElementById("container2").style.backgroundColor = "#4BB543";   // The getElementById() method returns the element that has the ID attribute with the specified value.
    }
    
    function showMessage(message) {                                 // The showMessage() function is used to display the message.
      const messageDiv = document.createElement("div");             // The createElement() method creates an Element Node with the specified name.
      messageDiv.className = "message";                             // The className property sets or returns the class name of an element (the value of an element's class attribute).
      messageDiv.innerText = message;                               // The innerText property sets or returns the text content of the specified node, and all its descendants.
      document.body.appendChild(messageDiv);                        // The appendChild() method appends a node as the last child of a node.  
      setTimeout(function() {                                       // The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.
        messageDiv.remove();                                        // The remove() method removes the specified element from the DOM.
      }, 2000);
    }
  
    function resetContainers() {                                    // The resetContainers() function is used to reset the containers.
      container2.innerHTML = "";                                    // The innerHTML property sets or returns the HTML content (inner HTML) of an element.
      items.forEach(function(item) {                                // forEach() method executes a provided function once for each array element.
        item.style.display = "block";                               // The display property sets or returns the element's display type.
        document.getElementById("container1").appendChild(item);
        document.getElementById("container2").style.backgroundColor = "#e0e0e0";
        
      });                                                                       
    }
  });
  