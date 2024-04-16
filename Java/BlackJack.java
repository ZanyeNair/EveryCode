package Java;
import java.util.*;


public class BlackJack{
    public static ArrayList <Integer> cardCount = new ArrayList<Integer>();

    public BlackJack(){
        for(int i=2; i<=10; i++){
            for(int j=0; j<4; j++){
                cardCount.add(i);
            }
        }
    }
    public static void main(String[] args) {
        System.out.println(cardCount);
    }
}
