<template>
  <div class="shop__form">
    <form>
      <label>
        <div class="shop__form-title shop__form-title_required">Наименование товара</div>
        <input :class="{'shop__form-input_active':errorName}" v-model="name" type="text" placeholder="Введите наименование товара"/>
        <div class="shop__form-error"><span v-show="errorName">Поле является обязательным</span></div>
      </label>
      <label>
        <div class="shop__form-title">Описание товара</div>
        <textarea v-model="text" type="text" placeholder="Введите описание товара"></textarea>
        <div class="shop__form-error"></div>
      </label>
      <label>
        <div class="shop__form-title shop__form-title_required">Ссылка на изображение товара</div>
        <input :class="{'shop__form-input_active':errorLink}" v-model="link"  type="url" placeholder="Введите ссылку"/>
        <div class="shop__form-error"><span v-show="errorLink">Поле является обязательным</span></div>
      </label>
      <label>
        <div class="shop__form-title shop__form-title_required">Цена товара</div>
        <input :class="{'shop__form-input_active':errorPrice}" v-model.number="price" @change="numberWithSpaces(price)" type="text" placeholder="Введите цену"/>
        <div class="shop__form-error"><span v-show="errorPrice">Поле является обязательным</span></div>
      </label>
      <button class="shop__form-btn" :class="{'shop__form-btn_active':isActive}" @click.prevent="onClickSave">Добавить товар</button>
    </form>
  </div>
</template>
<script>

export default {
  name: "ProductAddingForm",
  data() {
    return {
      name: "",
      text: "",
      link: "",
      price: "",
      isActive: false,
      errorName: false,
      errorLink: false,
      errorPrice: false
    }
  },
  methods: {
    onClickSave(){
      const data = {
        name: this.name,
        text: this.text,
        img: this.link,
        price: this.price,
        id: Math.floor(Math.random()*100000)
      }
      if(!this.name) this.errorName = true
      if(!this.link) this.errorLink = true
      if(!this.price) this.errorPrice = true
      if (this.name && this.link && this.price) {
        this.$store.commit('addDataToCatalogList', data)
        this.name = "",
        this.text = "",
        this.link = "",
        this.price = "",
        this.isActive = false
      }
    },
    numberWithSpaces(x) {
      this.price = x.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    }
  },
  updated() {
    if (this.name && this.link && this.price) {
      this.errorName = false,
      this.errorLink = false,
      this.errorPrice = false
      this.isActive = true
    }
  }
}
</script>

<style lang="scss" scoped>

form{
  width: 90%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}

input{
  padding: 10px 0 11px 16px;
}

textarea{
  padding: 10px 0 83px 16px;
  resize: none;
}

input,
textarea{
  display: block;
  width: 95%;
  background: #FFFEFB;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  font-size: 12px;
  line-height: 15px;
  color: #B4B4B4;
  border: none;
  outline: none;

  &::placeholder{
    font-size: 12px;
    color: #B4B4B4;
  }
}
.shop__form{
  background: #FFFEFB;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  width: 100%;
  height: 440px;
  display: flex;
  justify-content: center;

  &-title{
    font-size: 10px;
    line-height: 13px;
    letter-spacing: -0.02em;
    color: #49485E;
    margin: 2px 0 4px;

    &_required::after{
      content: '';
      position: absolute;
      width: 4px;
      height: 4px;
      background: #FF8484;
      border-radius: 4px;
    }
  }

  &-btn{
    background: #EEEEEE;
    border-radius: 10px;
    font-family: 'Inter';
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #B4B4B4;
    border: none;
    width: 100%;
    padding: 10px 0;
    margin-top: 10px;

    &_active{
      background: #7BAE73;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
      color: #FFFFFF;
    }
  }

  &-error{
    font-size: 8px;
    letter-spacing: -0.02em;
    color: #FF8484;
    margin-top: 4px;
    height: 10px;
  }

  &-input_active{
    border: 1px solid #FF8484;
  }
}
</style>
