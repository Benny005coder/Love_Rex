/**
 * Love_Rex 网站交互脚本
 * 实现爱心按钮点击、随机夸奖话语显示和飘落爱心动画
 */

// 夸奖话语数组 - 包含各种具体方面的赞美老公的话
const praiseMessages = [
    "老公你真棒！你总是能在我最需要的时候给我最温暖的拥抱",
    "老公你是最棒的！你的工作能力让我非常骄傲，你真的很优秀",
    "老公我爱你！你对待家人的细心和耐心让我感动不已",
    "老公你太厉害了！你解决问题的能力总是让我佩服得五体投地",
    "老公你是我的英雄！你勇敢面对困难的样子真的很帅气",
    "老公你真的很优秀！你的责任心和对家庭的付出让我很感动",
    "老公你让我很骄傲！你的善良和正直是我最欣赏的品质",
    "老公你是最好的！你总是能理解我的心情，给我最好的安慰",
    "老公你真的很棒！你的幽默感总能让我开心起来",
    "老公你太棒了！你对待工作的认真态度让我很敬佩",
    "老公你是我的骄傲！你的温柔体贴让我感到无比幸福",
    "老公你真的很厉害！你总是能给我最实用的建议和帮助",
    "老公你太优秀了！你的聪明才智让我每天都为你感到自豪",
    "老公你是最优秀的！你的坚持和毅力是我学习的榜样",
    "老公你真的很棒棒！你对待朋友的真诚让我很感动",
    "老公你太棒棒了！你的厨艺进步神速，做的菜越来越好吃",
    "老公你是我的偶像！你的多才多艺让我每天都为你着迷",
    "老公你真的很棒棒哒！你的运动天赋让我很羡慕",
    "老公你太棒棒哒了！你学习新技能的速度真的很快",
    "老公你是最棒棒哒的！你的艺术细胞让我很惊喜",
    "老公你真的很棒！你总是能记住我说过的每一件小事",
    "老公你太棒了！你的时间管理能力让我很佩服",
    "老公你是我的骄傲！你对待长辈的孝顺让我很感动",
    "老公你真的很厉害！你的逻辑思维能力真的很强",
    "老公你太优秀了！你总是能给我最中肯的意见",
    "老公你是最优秀的！你的耐心和包容让我感到很温暖",
    "老公你真的很棒棒！你的创造力和想象力让我很惊喜",
    "老公你太棒棒了！你总是能给我最浪漫的惊喜",
    "老公你是我的偶像！你的领导能力让我很敬佩",
    "老公你真的很棒棒哒！你的学习能力真的很强",
    "老公你太棒棒哒了！你总是能给我最贴心的照顾",
    "老公你是最棒棒哒的！你的细心观察让我很感动",
    "老公你真的很棒！你对待生活的积极态度感染着我",
    "老公你太棒了！你的规划能力让我对未来充满信心",
    "老公你是我的骄傲！你的坚持和努力让我很感动",
    "老公你真的很厉害！你总是能给我最温暖的鼓励",
    "老公你太优秀了！你的专业能力让我很自豪",
    "老公你是最优秀的！你的善良和爱心让我很感动",
    "老公你真的很棒棒！你总是能给我最需要的支持",
    "老公你太棒棒了！你的乐观精神让我每天都很快乐",
    "老公你是我的偶像！你的勇气和坚强让我很敬佩"
];

/**
 * 获取随机夸奖话语
 * @returns {string} 随机的夸奖话语
 */
function getRandomPraiseMessage() {
    const randomIndex = Math.floor(Math.random() * praiseMessages.length);
    return praiseMessages[randomIndex];
}

/**
 * 创建飘落的爱心元素
 * @param {number} x - 爱心的水平位置
 * @param {number} delay - 动画延迟时间
 */
function createFloatingHeart(x, delay = 0) {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.style.left = x + 'px';
    heart.style.animationDelay = delay + 's';
    
    // 随机大小变化
    const size = 15 + Math.random() * 15;
    heart.style.width = size + 'px';
    heart.style.height = size + 'px';
    
    // 随机透明度
    heart.style.opacity = 0.3 + Math.random() * 0.4;
    
    // 随机旋转
    const rotation = Math.random() * 360;
    heart.style.transform = `rotate(${rotation}deg)`;
    
    document.getElementById('floatingHearts').appendChild(heart);
    
    // 动画结束后移除元素
    setTimeout(() => {
        if (heart.parentNode) {
            heart.parentNode.removeChild(heart);
        }
    }, 4000);
}

/**
 * 创建多个飘落的爱心
 * @param {number} count - 爱心数量
 */
function createMultipleHearts(count = 5) {
    for (let i = 0; i < count; i++) {
        const x = Math.random() * window.innerWidth;
        const delay = Math.random() * 2;
        createFloatingHeart(x, delay);
    }
}

/**
 * 显示夸奖话语
 * @param {string} message - 要显示的话语
 */
function showPraiseMessage(message) {
    const messageText = document.getElementById('messageText');
    const messageContainer = document.getElementById('messageContainer');
    
    // 添加淡出效果
    messageContainer.style.opacity = '0';
    messageContainer.style.transform = 'scale(0.9)';
    
    setTimeout(() => {
        // 更新文本内容
        messageText.textContent = message;
        
        // 添加淡入效果
        messageContainer.style.opacity = '1';
        messageContainer.style.transform = 'scale(1)';
        
        // 添加闪烁效果
        messageContainer.style.animation = 'none';
        setTimeout(() => {
            messageContainer.style.animation = 'pulse 0.6s ease-in-out';
        }, 10);
    }, 200);
}

/**
 * 爱心按钮点击事件处理
 */
function handleHeartClick() {
    // 获取随机夸奖话语
    const randomMessage = getRandomPraiseMessage();
    
    // 显示夸奖话语
    showPraiseMessage(randomMessage);
    
    // 创建飘落的爱心
    createMultipleHearts(8);
    
    // 添加按钮点击动画
    const heartButton = document.getElementById('heartButton');
    heartButton.style.transform = 'scale(0.9)';
    
    setTimeout(() => {
        heartButton.style.transform = 'scale(1)';
    }, 150);
}

/**
 * 页面加载完成后的初始化
 */
function initializePage() {
    // 获取爱心按钮元素
    const heartButton = document.getElementById('heartButton');
    
    // 添加点击事件监听器
    heartButton.addEventListener('click', handleHeartClick);
    
    // 添加触摸事件支持（移动设备）
    heartButton.addEventListener('touchstart', (e) => {
        e.preventDefault();
        handleHeartClick();
    });
    
    // 定期创建一些飘落的爱心（营造浪漫氛围）
    setInterval(() => {
        if (Math.random() < 0.3) { // 30%的概率创建爱心
            createFloatingHeart(Math.random() * window.innerWidth);
        }
    }, 3000);
    
    // 页面加载完成后显示欢迎消息
    setTimeout(() => {
        showPraiseMessage("点击爱心按钮，看看我想对你说什么");
    }, 1000);
}

/**
 * 键盘事件处理（支持空格键和回车键）
 */
function handleKeyboardEvents() {
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space' || e.code === 'Enter') {
            e.preventDefault();
            handleHeartClick();
        }
    });
}

/**
 * 窗口大小改变时的处理
 */
function handleWindowResize() {
    // 清理所有飘落的爱心
    const floatingHearts = document.getElementById('floatingHearts');
    floatingHearts.innerHTML = '';
}

// 页面加载完成后执行初始化
document.addEventListener('DOMContentLoaded', () => {
    initializePage();
    handleKeyboardEvents();
    
    // 监听窗口大小改变
    window.addEventListener('resize', handleWindowResize);
    
    // 添加页面可见性变化监听（当用户切换回页面时重新开始动画）
    document.addEventListener('visibilitychange', () => {
        if (!document.hidden) {
            // 页面重新可见时，重新开始一些动画
            const heartButton = document.getElementById('heartButton');
            heartButton.style.animation = 'none';
            setTimeout(() => {
                heartButton.style.animation = 'pulse 2s infinite';
            }, 10);
        }
    });
});

// 添加一些额外的交互效果
document.addEventListener('mousemove', (e) => {
    // 鼠标移动时创建跟随的爱心效果（偶尔）
    if (Math.random() < 0.01) { // 1%的概率
        createFloatingHeart(e.clientX, 0);
    }
});

// 导出函数供其他模块使用（如果需要）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        getRandomPraiseMessage,
        createFloatingHeart,
        showPraiseMessage,
        handleHeartClick
    };
}
