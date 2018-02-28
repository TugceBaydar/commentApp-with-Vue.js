var app = new Vue ({
  el: "#app",
  data: {
    name: "",
    comment: "",
    result: [],
  },
  methods: {
    addComment: function() {

      var userComment = this.comment;
      this.result.push(userComment);
      this.comment = "";
      this.name = "";
    },
    removeComment: function(userComment) {
      var index = this.result.indexOf(userComment);
      this.result.splice(index, 1);
    }
  }
})
