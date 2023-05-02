// BÀI 1: TÍNH TIỀN LƯƠNG NHÂN VIÊN
/** Mô hình 3 khối
 * Input: Nhập số ngày làm
 *
 * Output: tiền lương nhân viên
 * 
 * Progress: 
 * Khai báo biến workDay là số ngày làm, biến wage là lương 1 ngày
 * Khai báo biến income là tiền lương nhân viên
 * Gán tiền lương nhân viên = số ngày làm * lương 1 ngày
 * In tiền lương nhân viên ra màn hình
 */

const wage = 100000;
function tinhTienLuong() {
    var workDay = document.getElementById('workDay').value*1,
        income = 0;

        income = workDay * wage;
        document.getElementById('outcome-1').innerHTML = 'Tiền lương nhân viên: ' + income.toLocaleString();
        
}

document.querySelector('.income button').onclick = function() {tinhTienLuong()};

// BÀI 2: TÍNH GIÁ TRỊ TRUNG BÌNH
/**Mô hình 3 khối
 * Input: Nhập 5 số thực
 * 
 * Output: Giá trị trung bình của 5 số thực vừa nhập
 * 
 * Progress:
 * Khai báo và ép kiểu dữ liệu các biến cho số thực là realNumber từ 1 -> 5.
 * Khai báo biến cho giá trị trung bình là average.
 * Gán giá trị trung bình bằng tổng các số thực chia cho 5.
 * In giá trị trung bình ra màn hình.
 */

function averageCalc() {
var realNumber1 = document.getElementById('realNum1').value*1,
    realNumber2 = document.getElementById('realNum2').value*1,
    realNumber3 = document.getElementById('realNum3').value*1,
    realNumber4 = document.getElementById('realNum4').value*1,
    realNumber5 = document.getElementById('realNum5').value*1,
    average = 0;

    average = (realNumber1 + realNumber2 + realNumber3 + realNumber4 + realNumber5)/5;

    document.getElementById('outcome-2').innerHTML = 'Giá trị trung bình: ' + average;
}

document.querySelector('.average button').onclick = function() {averageCalc()}

// BÀI 3: QUY ĐỔI TIỀN TỆ
/** Mô hình 3 khối:
 * Input: Nhập số tiền USD
 * 
 * Output: Số tiền sau quy đổi VND
 * 
 * Progress: 
 * Khai báo biến cho tiền USD cần quy đổi là USD, cho giá đổng tiền cơ sở VND là vndPrice, cho số tiền VND sau khi quy đổi là convVND.
 * Gán số tiền VND sau khi quy đổi = số tiền USD cần quy đổi * giá đồng tiền cơ sở VND
 * In số tiền VND sau khi quy đổi ra màn hình.
 */

const vndPrice = 23500;
function transferMoney() {
    var USD = document.getElementById('USD').value*1,
        convVND = 0;

        convVND = USD * vndPrice;
    
    document.getElementById('VND').value = convVND;
}

document.querySelector('.transfer button').onclick = function() {transferMoney()}

// BÀI 4: TÍNH CHU VI, DIỆN TÍCH HÌNH CHỮ NHẬT
/**Mô hình 3 khối:
 * Input: Nhập chiều dài, chiều rộng của hình chữ nhật
 * 
 * Output: Diện tích và chu vi của hình chữ nhật
 * 
 * Progress: 
 * Khai báo biến cho chiều dài, chiều rộng, diện tích và chu vi lần lượt là longs, width, acreage, perimeter. 
 * Gán diện tích = chiều dài * chiều rộng, và chu vi = (chiều dài + chiều rộng)*2.
 * In diện tích và chu vi hình chữ nhật ra màn hình
 */

function rectangleCalc() {
var longs = document.getElementById('longs').value*1,
    width = document.getElementById('width').value*1,
    acreage = 0,
    perimeter = 0;

    acreage = longs * width;
    perimeter = (longs + width)*2;

    document.getElementById('acreage').innerHTML = 'Diện tích hình chữ nhật là: ' + acreage;
    document.getElementById('perimeter').innerHTML = 'Chu vi hình chữ nhật là: ' + perimeter;
}

document.querySelector('.rectangle button').onclick = function() {rectangleCalc()}

// BÀI 5: TÍNH TỔNG 2 KÝ SỐ
/**Mô hình 3 khối:
 * Input: Nhập 1 số có 2 chữ số
 * 
 * Output: Tổng 2 ký số của số vừa nhập
 * 
 * Progress:
 * Khai báo biến cho số có 2 chữ số là number, chữ số hàng chục là tens, chữ số hàng đơn vị là ones, và tổng ký số là sum.
 * Gán chữ số hàng chục = số chia lấy nguyên cho 10, chữ số hàng đơn vị = số chia lấy dư cho 10, và tổng ký số = chữ số hàng chục + chữ số hàng đơn vị.
 * In tổng 2 ký số ra màn hình.
 */

function sumCalc() {
var number = document.getElementById('number').value*1,
    tens = 0,
    ones = 0,
    sum = 0;

    tens = Math.floor(number/10);
    ones = number%10;
    sum = tens + ones;

    document.getElementById('outcome-5').innerHTML = 'Tổng 2 ký số là: ' + sum;
}

document.querySelector('.sum-num button').onclick = function() {sumCalc()}

