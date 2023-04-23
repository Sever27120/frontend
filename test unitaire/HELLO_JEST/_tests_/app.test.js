const app = require("../app.js")

describe("Palindrom", ()=> {
    it("should be a palindrom", ()=>{
        expect(app.isPalidrom("kayak")).toEqual(true);
    });
  
});
describe("Moderator", ()=>{
    it("contient des mots interdits", ()=>{
        expect(app.containForbiddenWords("Vous êtes des nuls")).toEqual(true);
    });
});
