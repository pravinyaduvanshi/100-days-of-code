function lcm(num1,num2,num3,num4)
{	
console.log("input for LCM" + " - " + num1,num2,num3,num4);
    var temp , res=1;
    var d = 2;
   if(num1>num2)
    {
        if(num1>num3)
        {
            if(num1>num4)
            {
                temp = num1;
            }
            else
            {
                temp = num4;
            }
        }
        else
        {
            if(num3>num4)
            {
                temp = num3;
            }
            else
            {
                temp = num4;
            }
        }
    }
    else
    {
        temp =num2; 
    }
	
    for(var i = 2; i<=temp;i++)
    {
        if(num1%d==0||num2%d==0||num3%d==0||num4%d==0)
        {
            res = res*d;
        }
        num1 = (num1%d==0)?num1=num1/d:num1;
        num2 = (num2%d==0)?num2=num2/d:num2;
        num3 = (num3%d==0)?num3=num3/d:num3;
        num4 = (num4%d==0)?num4=num4/d:num4;
        if(num1%d==0||num2%d==0||num3%d==0||num4%d==0)
        {
            d =d;
        }
        else
        {
            d = d+1;
        }
    }
	
	console.log("LCM" + " - " + res);
}

function hcf(num1,num2,num3,num4)
{
	console.log("input for HCF" + " - " + num1,num2,num3,num4);
    var temp , res=1;
    var d = 2;
   if(num1>num2)
    {
        if(num1>num3)
        {
            if(num1>num4)
            {
                temp = num1;
            }
            else
            {
                temp = num4;
            }
        }
        else
        {
            if(num3>num4)
            {
                temp = num3;
            }
            else
            {
                temp = num4;
            }
        }
    }
    else
    {
        temp =num2; 
    }
	
    for(var i = 2; i<=temp;i++)
    {
        if(num1%d==0 && num2%d==0 && num3%d==0 && num4%d==0)
        {
            res = res*d;
        }
        num1 = (num1%d==0)?num1=num1/d:num1;
        num2 = (num2%d==0)?num2=num2/d:num2;
        num3 = (num3%d==0)?num3=num3/d:num3;
        num4 = (num4%d==0)?num4=num4/d:num4;
        if(num1%d==0 && num2%d==0 && num3%d==0 && num4%d==0)
        {
            d =d;
        }
        else
        {
            d = d+1;
        }
    }
	console.log("HCF" + " - " + res);
}
lcm(40 , 30 , 15 , 10);
hcf(9 , 12 , 18 , 27);