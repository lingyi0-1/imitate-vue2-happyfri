module.exports = {
    lintOnSave: false,
    publicPath: process.env.NODE_ENV === "production" ? "/imitate-vue2-happyfri" : "/",
    css:{
      loaderOptions: {
        sass: {
          data: `@import "@/assets/css/vm.scss";`
        }
      }
    }

}
