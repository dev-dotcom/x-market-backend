class ApiResponse { 
    constructor(statusCode, data, messaage= "Success"){
        this.statusCode = statusCode
        this.data = data
        this.messaage = messaage
        this.success = statusCode < 400
    }
}