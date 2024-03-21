package Java;
import java.util.ArrayList;
import java.util.Scanner;

public class Main{
    
    public static void main(String[] args) {
        new int[3] arr = [1,2,3];
        Methods n = new Methods;
        System.out.println(n.dup(arr));
    }
}

class Methods{

    int[] arr;

    public Methods(int[] s){
        arr =s;
    }

    public int getMin(){
        int min = arr[0];
        for(int i = 0; i<arr.length; i++){
            if(arr[i]<min){
                min = arr[i];
            }
        }
        return min;
       }

    public boolean isIncreasing(){
        for(int i = 1; i<arr.length; i++){
            if(arr[i]<arr[i-1]){
                return false;
            }
        }
        return true;
    }

    public int[] removeDuplicate(){
        for(int i = 1; i<arr.length; i++){
            if(arr[i] == arr[i-1]){
                if(!this.isIncreasing()){
                    arr[i] = 0;
                    arr[i-1] = 0;
                }
                else{
                    if(i == arr.length-1){
                        arr[i] = 0;
                        arr[i-1] = 0;
                    }
                    else{
                        for(int j = i+1; j<arr.length; j++){
                            arr[j-2] = arr[j];
                        }
                        arr[arr.length-2] = 0;
                        arr[arr.length-1] = 0;
                    }
                }
            }
        }
        return arr;
    }
    
}