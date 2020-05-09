let playlist = [{
        "id": "1",
        "yturl": "https://www.youtube.com/watch?v=R3pd6h_wU6Y"
    },
    {
        "id": "2",
        "yturl": "https://www.youtube.com/watch?v=saDmN2f3HI0"
    },
    {
        "id": "3",
        "yturl": "https://www.youtube.com/watch?v=0EX3tQWswj0"
    },
    {
        "id": "4",
        "yturl": "https://www.youtube.com/watch?v=S4F4WXK-w8I"
    },
    {
        "id": "5",
        "yturl": "https://www.youtube.com/watch?v=K_7To_y9IAM"
    },
    {
        "id": "6",
        "yturl": "https://www.youtube.com/watch?v=ZCHH_slRylA"
    },
    {
        "id": "7",
        "yturl": "https://www.youtube.com/watch?v=KId6eunoiWk"
    },
    {
        "id": "8",
        "yturl": "https://www.youtube.com/watch?v=ZTjhcl_733s"
    },
    {
        "id": "9",
        "yturl": "https://www.youtube.com/watch?v=MppoMFP35CI"
    },
    {
        "id": "10",
        "yturl": "https://www.youtube.com/watch?v=y6FCQWlKeJQ"
    }
];

var user = prompt('username');
var pass = prompt('password');

var loginvalid = false;

function cekloginpush(datalogin) {
    for (let i = 0; i < datalogin.username.length; i++) {
        datalogin.ceklogin.splice(i, 0, false);
    }
}


function checklogin(j) {
    if (user != '' && pass != '') {
        while (j <= 2 && loginvalid == false) {
            for (let i = 0; i < datalogin.username.length; i++) {
                if (user == datalogin.username[i] && pass == datalogin.password[i]) {
                    loginvalid = true;
                    datalogin.ceklogin[i] = true;
                    i = datalogin.username.length;
                }
            }
            if (loginvalid) {
                loginsuccess(datalogin.ceklogin.indexOf(true));
            } else if (j == 2) {
                alert('anda terblokir!');
            } else {
                alert('username atau password anda salah!');
                trylogin();
                j++;
            }
        }
    } else {
        alert('username atau password tidak boleh kosong!');
        trylogin();
    }
}

function loginsuccess(session) {
    if (datalogin.nama[session] == 'admin') {
        var user = prompt('selamat datang ' + datalogin.nama[session] + '\n1. Tambah User ' +
            '\n2. Tampil User' +
            '\n3. Cari User ' +
            '\n4. Hapus User ' +
            '\n5. logout');
        switch (parseInt(user)) {
            case 1:
                var addusername = prompt("Masukkan Username");
                datalogin.username.push(addusername);
                var addpassword = prompt("Masukkan Password");
                datalogin.password.push(addpassword);
                var addname = prompt("Masukkan Nama");
                datalogin.nama.push(addname);
                cekloginpush();
                loginsuccess(session);
                break;
            case 2:
                alert(ShowUsername(session));
                loginsuccess(session);
                break;
            case 3:
                var searchname = prompt("Cari Nama");
                if (datalogin.nama.indexOf(searchname) != -1) {
                    var searchindex = datalogin.nama.indexOf(searchname);
                    alert(datalogin.nama[searchindex] + '\n' +
                        datalogin.username[searchindex]);
                } else {
                    alert('Data Tidak Ditemukan!')
                }
                loginsuccess(session);
                break;
            case 4:
                var deleteuser = prompt('Pilih Yang Mau Dihapus \n' + ShowUsername(session));
                deleteuser -= 1;
                if (deleteuser == 2 || deleteuser == session) {
                    deleteuser += 1;
                }
                if (datalogin.username[deleteuser] != undefined) {
                    datalogin.username.splice(deleteuser, 1);
                    datalogin.password.splice(deleteuser, 1);
                    datalogin.nama.splice(deleteuser, 1);
                    datalogin.ceklogin.splice(deleteuser, 1);
                } else {
                    alert(datalogin.username[deleteuser]);
                    alert('Data Tidak Ditemukan!');
                    i = datalogin.username.length;
                }
                loginsuccess(datalogin.ceklogin.indexOf(true));

                break;
            case 5:
                datalogin.ceklogin[session] == false;
                trylogin();
                break;
            default:
                loginsuccess(session);
                break;
        }
    } else {
        var user = prompt('selamat datang ' + datalogin.nama[session] + '\n1. Putar Lagu dari youtube \n2. Logout');
        switch (parseInt(user)) {
            case 1:
                var randomPlaylist = Math.floor(Math.random() * 10);
                playlist.forEach(function (data) {
                    if (randomPlaylist == data.id) {
                        window.open(data.yturl);
                    }
                });
                loginsuccess(session);
                break;
            case 2:
                datalogin.ceklogin[session] == false;
                trylogin();
                loginsuccess(session);
                break;
            default:
                loginsuccess(session);
                break;
        }
    }
}

function ShowUsername(session) {
    var append = '';
    var no = 1;
    for (let k = 0; k < datalogin.username.length; k++) {
        if (datalogin.username[k] == 'admin' || k == session) {
            append += '';
        } else {
            append += no + '.' + datalogin.username[k] + '\n';
            no++;
        }
    }
    return append;
}

function trylogin() {
    user = prompt('username');
    pass = prompt('password');
    checklogin();
}