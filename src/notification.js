export function showNotification(message){
    const notification = document.createElement('div');
    notification.classList.add('notification');
    const p = document.createElement('p'); 
    p.textContent = message;
    notification.appendChild(p);
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 5000)
}
