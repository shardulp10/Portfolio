// Video Hover Effects
const videoList = [
    document.getElementById('projectVideo1'),
    document.getElementById('projectVideo2'),
    document.getElementById('projectVideo3')
];
const hoverSign = document.querySelector('.hover-sign');

videoList.forEach(video => {
    video?.addEventListener("mouseover", () => {
        video.play();
        hoverSign?.classList.add("active");
    });
    video?.addEventListener("mouseout", () => {
        video.pause();
        hoverSign?.classList.remove("active");
    });
});

// Sidebar Animation
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');

menu.addEventListener("click", () => {
    sideBar.classList.remove("close-sidebar");
    sideBar.classList.add("open-sidebar");
});

closeIcon.addEventListener("click", () => {
    sideBar.classList.remove("open-sidebar");
    sideBar.classList.add("close-sidebar");
});
