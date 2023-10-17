function Teman() {
    var Kost = {
        Nama            : "Carolina",
        Angkatan        : 2019,
        Fakultas        : "FTI",
        Jurusan         : "Teknik Informatika",
        Konsentrasi     : "Software Engineering",
        Wali_Studi      : "Amusi Lie"
    }
    
    var Kost1 = {
        Nama            : "Nolis Sanjaya",
        Angkatan        : 2019,
        Fakultas        : "FTI",
        Jurusan         : "Teknik Informatika",
        Konsentrasi     : "Software En,gineering",
        Wali_Studi      : "Hendri Yong"
    }

    for (var x in Kost) {
        console.log(Kost[x]);
    }
    console.log(" ");
    for (var x in Kost1) {
        console.log(Kost1[x]);
    }
}
Teman();