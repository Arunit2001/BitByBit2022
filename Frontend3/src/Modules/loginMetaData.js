export default class LoginMetaData{
    
    role = 'student';
    token = '';
    first_name='';
    last_name='';
    student_img='';
    teacher = {
        teacher_img:'',
        last_name:this.last_name,
        institute_name:'',
        phone_number:'',
        bank_account_no:'',
        bank_IFSC:'',
        UPI_id:''
    }

}