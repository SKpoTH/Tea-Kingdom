## Tea-kingdom
- Node.js is Require [Download](https://nodejs.org/en/download/) 
### init
 - git clone https:<i></i>//github.com<i></i>/SKpoTH/tea-kingdom.git
 - npm install
### run
 - npm start
 
### HowToUse
 #### tea-kingdom\src\components\
 - copy folder [UseCasePage]() -> [UseCasePage222222]()
 - เปลี่ยนชื่อ folder [UseCasePage222222]() เป็นหน้าเพจที่ต้องการสร้าง {[newOne]()}
 - เเก้ไขใน [newOne]()/index.js
 - เปลี่ยนชื่อ export default class [newOne]() extends Component {
  #### routes.js
  - เพิ่มดังนี้<br>
   1<br>
   ```import newOne from './components/newOne';```<br>
   2<br>
   ```<Router {...props}>```<br>
   ``` <Route path="/newOne" component={newOne}/>```<br>
   ```</Router>```
