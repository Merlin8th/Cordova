var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();
/*
$(document).ready(function(){
    $('#btn_home').hide();      //ซ่อนปุ่ม home ไว้ก่อน 

    // ถ้ากดปุ่ม Save (จะมี Even submit) ให้อ่านข้อมูลจากแต่ละอินพุท แล้วแสดงกลับไปที่หน้า HTML
    $('form').submit(function(e){

        $(this).hide(700);     // ทำเอฟเฟคท์เปลี่ยนหน้าจอ (ระยะเวลา .7 วินาที)
        var user = $('#name').val(); //อ่านข้อมูลจาก input 
        var pass = $('#pwd').val();
        var email = $('#email').val();
        var comment = $('#comment').val();

        //ข้อมูลที่อ่านได้ สามารถนำไปประมวลผลดำเนินการต่อ เช่น บันทึก สั่งเข้า server ..
        //สำหรับตัวอย่างนี้ ตัดช่วงแค่ให้สั่งข้อมูลไปแสดงที่หน้า HTML ที่ id=myOutput
        $('#myOutput').html(user + "<br>" + pass + "<br>" + email + "<br>" + comment + "<br>");
        $('#btn_home').show();

        e.preventDefault();     // ไม่ให้โหลดฟอร์มซ้ำอีกครั้งหรือใช้วิธี return false ก็ได้
        //return false
    });
});  */

$(document).ready(function(){
    $('form').submit(function(event) {
        /* Act on the event */
        var myplatform = $('input:radio[name=platform]:checked').val();
        $('#myOutput').html('select:' + myplatform + "<br>");
    });
});

$(document).ready(function(){
    $('form').submit(function(event) {
        /* Act on the event */
        var slider= $('#slider').val();
        $("#myOutput").html("เลือก" + slider + "<br>");
        $("#btn_home").show();
        e.preventDefault();
    });
})