function Search() {
    // Lấy giá trị của các ô input
    var studentName = document.getElementById("input1").value;
    var studentClass = document.getElementById("input2").value;
    var specialization = document.getElementById("input3").value;
  
    // Kiểm tra xem có ô input nào trống không
    if (studentName === "" || studentClass === "" || specialization === "") {
      alert("Please fill in all fields");
    } else {
      // Nếu đủ thông tin, thực hiện các bước tìm kiếm hoặc xử lý khác ở đây
      alert("Search successful!");
      
    }
  }
   function Addstudent(){
    
    alert("Add student successful!");

   }
     

  function ResetInputs() {
    // Xóa nội dung của các ô input
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("input3").value = "";
  }
  