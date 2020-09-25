function proveraForme()
{
var ime = document.porudzbina.ime.value;
var adresa = document.porudzbina.adresa.value;
var telefon = document.porudzbina.telefon.value;
var pica = document.porudzbina.pica.value;
var kolicina = document.porudzbina.kolicina.value;
var komentar = document.porudzbina.komentar.value;

	if(ProveriIme(ime,1,50))
	{
		if(ProveriTelefon(telefon,1,15))
		{
			if(ProveriPicu(pica))
			{
				var LinijaTeksta=ime+";"+adresa+";"+telefon+";"+pica+";"+kolicina+";"+komentar;
				SnimiuFajl(LinijaTeksta);
				alert("Zahvaljujemo Vam na registraciji");
				document.getElementById("porudzbina").reset();
			}
		}	
	}
return false;
} 

function ProveriIme(naziv,mx,my)
{
var naziv_len = naziv.length;
if (naziv_len == 0 || naziv_len >= my || naziv_len < mx)
{
alert("Morate uneti ime i prezime, od: "+mx+" do: "+my+ " karaktera");
document.porudzbina.ime.focus();
return false;
}
return true;
}

function ProveriTelefon(uemail,mx,my)
{
var naziv_len = uemail.length;
if (naziv_len == 0 || naziv_len >= my || naziv_len < mx)
{
alert("Morate uneti telefon, od: "+mx+" do: "+my+ " karaktera");
document.porudzbina.telefon.focus();
return false;
}
return true;
}

function ProveriPicu(upica)
{
var naziv_len = upica.length;
if (naziv_len == 0 || upica == 'Default')
{
alert("Morate izabrati picu");
document.porudzbina.pica.focus();
return false;
}
return true;
}

function SnimiuFajl(tekst){
	alert(tekst);
}
