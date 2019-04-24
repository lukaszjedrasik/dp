export const imagesFiles = {
  methods: {
    onHeadImg(e) {
      let headImg = e.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(headImg);
      reader.onload = e => {
        this.headImg = e.target.result;
      };
    },
    onOtherImgFirst(e) {
      let otherImgFirst = e.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(otherImgFirst);
      reader.onload = e => {
        this.otherImgFirst = e.target.result;
      };
    },
    onOtherImgSecond(e) {
      let otherImgSecond = e.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(otherImgSecond);
      reader.onload = e => {
        this.otherImgSecond = e.target.result;
      };
    },
    onOtherImgThird(e) {
      let otherImgThird = e.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(otherImgThird);
      reader.onload = e => {
        this.otherImgThird = e.target.result;
      };
    }
  }
};

export const setDate = {
  created() {
    this.setDate();
  },
  methods: {
    setDate() {
      const months = [
        "styczeń",
        "luty",
        "marzec",
        "kwiecień",
        "maj",
        "czerwiec",
        "lipiec",
        "sierpień",
        "wrzesień",
        "październik",
        "listopad",
        "grudzień"
      ];
      const day = new Date().getDate();
      const month = new Date().getMonth();
      const year = new Date().getFullYear();
      const currentDate = `${day} ${months[month]} ${year}`;
      this.date = currentDate;
    }
  }
};
