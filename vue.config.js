module.exports = {
    lintOnSave: false,
    publicPath: process.env.NODE_ENV === "production" ? "/resume-vue" : "/",
    css:{
      loaderOptions: {
        sass: {
          data: `@import "@/assets/css/vm.scss";`
        }
      }
    }

}
