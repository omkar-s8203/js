/**
 * API respons cycle 
 * amazone.in >>>>> reuest >>>>>> amazon server>>>>> response >>>> html css js >>>>> in browser 
 * 
 * API (application programming Interface)
 * API return some data in form of json 
 */

  /**
   * JSON 
   * javascript object notation (www.json.org)
   * 
   * accessing data from JSON 
   * 
   * JSON.parse(data) Method 
   * to parse a string data into a js object 
   * 
   *JSON.stringify(json) Method
   TO parse a js data into JSON;
   */

   let jsonData = '{"current_page":1,"data":[{"breed":"Abyssinian","country":"Ethiopia","origin":"Natural\/Standard","coat":"Short","pattern":"Ticked"}],"first_page_url":"https:\/\/catfact.ninja\/breeds?page=1","from":1,"last_page":98,"last_page_url":"https:\/\/catfact.ninja\/breeds?page=98","links":[{"url":null,"label":"Previous","active":false},{"url":"https:\/\/catfact.ninja\/breeds?page=1","label":"1","active":true},{"url":"https:\/\/catfact.ninja\/breeds?page=2","label":"2","active":false},{"url":"https:\/\/catfact.ninja\/breeds?page=3","label":"3","active":false},{"url":"https:\/\/catfact.ninja\/breeds?page=4","label":"4","active":false},{"url":"https:\/\/catfact.ninja\/breeds?page=5","label":"5","active":false},{"url":"https:\/\/catfact.ninja\/breeds?page=6","label":"6","active":false},{"url":"https:\/\/catfact.ninja\/breeds?page=7","label":"7","active":false},{"url":"https:\/\/catfact.ninja\/breeds?page=8","label":"8","active":false},{"url":"https:\/\/catfact.ninja\/breeds?page=9","label":"9","active":false},{"url":"https:\/\/catfact.ninja\/breeds?page=10","label":"10","active":false},{"url":null,"label":"...","active":false},{"url":"https:\/\/catfact.ninja\/breeds?page=97","label":"97","active":false},{"url":"https:\/\/catfact.ninja\/breeds?page=98","label":"98","active":false},{"url":"https:\/\/catfact.ninja\/breeds?page=2","label":"Next","active":false}],"next_page_url":"https:\/\/catfact.ninja\/breeds?page=2","path":"https:\/\/catfact.ninja\/breeds","per_page":1,"prev_page_url":null,"to":1,"total":98}'

//    console.log(jsonData);

   let validREsponse = JSON.parse(jsonData);
   console.log(validREsponse);
   console.log(validREsponse.data);

   let student = {
    name: "omkar suryawasnhi",
    marks: 98,
   };
  
   let newjson = JSON.stringify(student);
   console.log(newjson);