document.addEventListener('DOMContentLoaded', () => {
    const commentInput = document.getElementById('comment-input');
    const addCommentBtn = document.getElementById('add-comment-btn');
    const commentList = document.getElementById('comment-list');

    addCommentBtn.addEventListener('click', () => {
        const commentText = commentInput.value.trim();

        if (commentText !== "") {
            addCommentToDOM(commentText);
            commentInput.value = ""; // Limpiar el textarea
        }
    });

    function addCommentToDOM(text) {
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');

        const textSpan = document.createElement('span');
        textSpan.classList.add('comment-text');
        textSpan.textContent = text;

        const actionsDiv = document.createElement('div');
        actionsDiv.classList.add('comment-actions');

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.addEventListener('click', () => {
            commentList.removeChild(commentDiv);
        });

        // Opcional: Agregar fecha y hora
        const now = new Date();
        const dateTimeSpan = document.createElement('span');
        dateTimeSpan.textContent = ` - ${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
        textSpan.appendChild(dateTimeSpan);

        actionsDiv.appendChild(deleteButton);
        commentDiv.appendChild(textSpan);
        commentDiv.appendChild(actionsDiv);
        commentList.appendChild(commentDiv);
    }
});