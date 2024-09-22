const contents = ['Love With you','Deep Love With My Wife','Missing My Jaan','I Really Miss You Baccha']

const typingContent = document.getElementById('job');
let typingIndex = 0;
let charIndex = 0;

function changeName() {
    if(charIndex < contents[typingIndex].length){
        typingContent.textContent += contents[typingIndex].charAt(charIndex);
        charIndex++;
        setTimeout(changeName, 100);
    }else{
        setTimeout(eraseName,3000);
    }
}

function eraseName() {
    if (charIndex > 0) {
        typingContent.textContent = contents[typingIndex].substring(0 , charIndex-1);
        charIndex--;
        setTimeout(eraseName,100)
    }else{
        typingIndex = (typingIndex+1) % contents.length;
        setTimeout(changeName, 100);
    }
}

console.log(changeName());
