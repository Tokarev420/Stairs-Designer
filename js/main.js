var x = [];

for(var i=0;i<48;i++)
{
	x[i] = 5;

	if(i<44)x[i] = 5;
	if(i<42)x[i] = 5;
	if(i<33)x[i] = 4;
	if(i<19)x[i] = 3;
	if(i<16)x[i] = 2;
	if(i<12)x[i] = 1;
	if(i<10)x[i] = 0;
}

console.log(x);
