var hostUrl = "http://47.94.226.128:8886/JSJB"

//HTTP 请求方法
const GET = 'GET';
const POST = 'POST';
const PUT = 'PUT';
const FORM = 'FORM';
const DELETE = 'DELETE';

// 请求
function wbRequest(method, url, data){
  return new Promise(function(resolve, reject){
    let header = {
      "content-type": "application/json"
    }
    wx.request({
      url: hostUrl + url,
      method: method,
      data: method === POST ? JSON.stringify(data): data,
      header: header,
      success(res){
        //请求成功
        //判断状态码
        console.log(res);
        if (res.data.code == 200) {

          resolve(res);

        }else{
          //其他异常
          reject('运行时错误，请稍后再试')
        }
      },
      fail(err){
        //请求失败
        reject(err)
      }
    })

  })

}


const API = {
  getOpenid:(data) => wbRequest(POST, '/appWorkOrder/appLogin',data),

};

module.exports = {
  API : API
}

