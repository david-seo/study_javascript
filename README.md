# study_javascript
Karma install

1. 기본요구사항 : nodejs, npm

<<<<<<< Updated upstream
2. Karma 설치
  npm install -g karma
  npm install -g karma-cli
=======
2. 글로벌 설치 
npm install -g karma-cli
npm install -g bower
>>>>>>> Stashed changes

*브라우저가 없는 콘솔 실행시 설치 
npm install -g phantomjs 

3. 로컬 설치 
 npm install --save-dev karma
 npm install --save-dev karma-jasmine
 bower install --save algular angular-mocks
4.런처 설치 

*브라우저가 없는 콜솔 실행시 설치 
npm install --save-dev karma-phantomjs-launcher

4. Karma 초기화
karma init -> karma.conf.js 생성

5. Karma 명령어
karma start

*libfontconfig 오류시 설치
sudo apt-get install libfontconfig
