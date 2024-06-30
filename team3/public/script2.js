document.addEventListener('DOMContentLoaded', () => {
  const welcomeMessage = document.getElementById('welcomeMessage');
  const mainButton = document.getElementById('mainButton');

  // '환영합니다' 메시지를 클릭하면 '메인으로 돌아가기' 버튼이 서서히 나타나게 합니다
  welcomeMessage.addEventListener('click', () => {
      mainButton.style.display = 'block';
      setTimeout(() => {
          mainButton.style.opacity = '1';
      }, 0);
  });

  // '메인으로 돌아가기' 버튼 클릭 시 index.html로 이동
  mainButton.addEventListener('click', () => {
      window.location.href = 'index.html';
  });
});
