import datetime

"""
1) tiklaninca o anki saati kaydet veya kronometre calistir. 
2) tekrar tiklaninca o anki saati ilk tiklanan saatten cikar ve onu tarihi de icerecek sekilde kayit altina al.
3) maas hesapla dendiginde veritabanindan geri getir.


"""
print(("*") *100)
while True:
    print(
        """
        Ise Basla[1]
        Isi Bitir[2]
        

        """
    )


    secim = int(input("Lutfen seciminizi giriniz : "))


    if secim==1:
        a=datetime.datetime.now()
        saatBasla=a.hour
        dakikBasla=a.minute
            

                
    elif secim==2:
        b=datetime.datetime.now()
        saatBitir=b.hour
        dakikaBitir=b.minute

        toplamSaat=saatBitir-saatBasla
        toplamDakika=dakikaBitir-dakikBasla
        print(f"Saat: {toplamSaat} Dakika: {toplamDakika}")
        break



toplamÜcret=(toplamSaat*8) + (toplamDakika*(8/60))

print(f"Toplam Ücret = {toplamÜcret} Euro")



