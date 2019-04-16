module.exports = {
    devServer:{
        proxy:{
           '/api':{
               target:'http://m.maoyan.com',
               pathRewrite:{
                   '^/api':''
               }
           } 
        }
    }
}