/* Reshuffle a given array(array with all unique values, so no duplicate in array) in way so that, every odd(including 1 too) index should be larger than it's left and right.
Example:
input : {1, 3, 5, 4, 8, 10}
output: {1, 5, 3, 8, 4, 10}
here index 1, 3, 5, and so on are larger than it's left and right both */

arr  = [1,3,5,4,8,10];
var temp = 0;

for(var i = 1; i<arr.length; i+=2 )
 {
     var left = i-1;
     var right = i+1;
     if(arr[i]<arr[left])
     {
        temp = arr[i];
        arr[i] = arr[left];
        arr[left] = temp;
     }
     
     if(arr[i]<arr[right])
     {
        temp = arr[i];
        arr[i] = arr[right];
        arr[right] = temp;
     }
 }

for(var i = 0; i<arr.length; i++)
{
    console.log(arr[i]);
}