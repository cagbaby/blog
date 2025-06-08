// document.addEventListener('DOMContentLoaded', function () {
//     // 主题切换功能
//     const themeToggle = document.getElementById('theme-toggle');
//     const themeStyle = document.getElementById('theme-style');

//     themeToggle.addEventListener('click', function () {
//         if (themeStyle.getAttribute('href') === 'theme-light.css') {
//             themeStyle.setAttribute('href', 'theme-dark.css');
//             localStorage.setItem('theme', 'dark');
//         } else {
//             themeStyle.setAttribute('href', 'theme-light.css');
//             localStorage.setItem('theme', 'light');
//         }
//     });

//     // 检查本地存储中的主题偏好
//     const savedTheme = localStorage.getItem('theme') || 'light';
//     themeStyle.setAttribute('href', `theme-${savedTheme}.css`);

//     // const timeDisplay = document.getElementById('timeDisplay');
//     // const greeting = document.getElementById('greeting');
//     // const greetings = [
//     //     { icon: 'fa-moon', text: '夜深了，注意休息！', hourStart: 0, hourEnd: 5 },
//     //     { icon: 'fa-sunrise', text: '清晨好！', hourStart: 5, hourEnd: 8 },
//     //     { icon: 'fa-sun', text: '上午好！', hourStart: 8, hourEnd: 11 },
//     //     { icon: 'fa-cloud-sun', text: '中午好！', hourStart: 11, hourEnd: 13 },
//     //     { icon: 'fa-cloud', text: '下午好！', hourStart: 13, hourEnd: 18 },
//     //     { icon: 'fa-moon', text: '晚上好！', hourStart: 18, hourEnd: 24 }
//     // ];
//     // function updateTime() {
//     //     const now = new Date();

//     //     // 更新时间显示
//     //     const hours = String(now.getHours()).padStart(2, '0');
//     //     const minutes = String(now.getMinutes()).padStart(2, '0');
//     //     const seconds = String(now.getSeconds()).padStart(2, '0');
//     //     timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;

//     //     // 更新问候语
//     //     updateGreeting(now.getHours());
//     // }

//     // function updateGreeting(hour) {
//     //     // 移除所有段落的active类
//     //     segments.forEach(segment => segment.classList.remove('active'));

//     //     // 根据小时确定问候语
//     //     let greetingIndex = 0;
//     //     for (let i = 0; i < greetings.length; i++) {
//     //         if (hour >= greetings[i].hourStart && hour < greetings[i].hourEnd) {
//     //             greetingIndex = i;
//     //             break;
//     //         }
//     //     }

//     //     // 更新问候语显示
//     //     const currentGreeting = greetings[greetingIndex];
//     //     greeting.innerHTML = `<i class="fas ${currentGreeting.icon}"></i> ${currentGreeting.text}`;

//     //     // // 高亮当前时间段
//     //     // segments[greetingIndex].classList.add('active');
//     // }

//     // // 初始更新时间
//     // updateTime();

//     // // 每秒更新时间
//     // setInterval(updateTime, 1000);
// });

// 全局变量声明
let timeDisplay, greeting;
const greetings = [
    { icon: 'fa-moon', text: '夜深了，注意休息！', hourStart: 0, hourEnd: 5 },
    { icon: 'fa-sunrise', text: '清晨好！', hourStart: 5, hourEnd: 8 },
    { icon: 'fa-sun', text: '上午好！', hourStart: 8, hourEnd: 11 },
    { icon: 'fa-cloud-sun', text: '中午好！', hourStart: 11, hourEnd: 13 },
    { icon: 'fa-cloud', text: '下午好！', hourStart: 13, hourEnd: 18 },
    { icon: 'fa-moon', text: '晚上好！', hourStart: 18, hourEnd: 24 }
];

// 初始化函数
function initTimeDisplay() {
    timeDisplay = document.getElementById('timeDisplay');
    greeting = document.getElementById('greeting');
    
    if (!timeDisplay || !greeting) {
        console.error("时间显示或问候语元素未找到");
        return;
    }
    
    // 初始更新时间
    updateTime();
    
    // 每秒更新时间
    setInterval(updateTime, 1000);
}

// 更新时间
function updateTime() {
    const now = new Date();
    
    // 更新时间显示
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
    
    // 更新问候语
    updateGreeting(now.getHours());
}

// 更新问候语
function updateGreeting(hour) {
    // 根据小时确定问候语
    let greetingIndex = 0;
    for (let i = 0; i < greetings.length; i++) {
        if (hour >= greetings[i].hourStart && hour < greetings[i].hourEnd) {
            greetingIndex = i;
            break;
        }
    }
    
    // 更新问候语显示
    const currentGreeting = greetings[greetingIndex];
    greeting.innerHTML = `<i class="fas ${currentGreeting.icon}"></i> ${currentGreeting.text}`;
}

// 主题切换和初始化
document.addEventListener('DOMContentLoaded', function() {
    // 主题切换功能
    const themeToggle = document.getElementById('theme-toggle');
    const themeStyle = document.getElementById('theme-style');
    
    themeToggle.addEventListener('click', function() {
        if (themeStyle.getAttribute('href') === '../css/theme-light.css') {
            themeStyle.setAttribute('href', '../css/theme-dark.css');
            localStorage.setItem('theme', 'dark');
        } else {
            themeStyle.setAttribute('href', '../css/theme-light.css');
            localStorage.setItem('theme', 'light');
        }
    });
    
    // 检查本地存储中的主题偏好
    const savedTheme = localStorage.getItem('theme') || 'light';
    themeStyle.setAttribute('href', `../css/theme-${savedTheme}.css`);
    
    // 初始化时间显示
    initTimeDisplay();
});