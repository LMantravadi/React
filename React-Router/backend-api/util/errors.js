//  export  function NotFoundError(message: string){
//     return {
//         message: message,
//         status: 404
//     }
// }

class NotFoundError {
  constructor(message) {
    this.message = message;
    this.status = 404;
  }
}

exports.NotFoundError = NotFoundError;
