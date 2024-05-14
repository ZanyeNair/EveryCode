package Java;
import java.util.*;

public class Rock_Tic {
    public static void setBoard() {

        for (int i = 0; i < 9; i++) {
            if (amount.get(i).equals("3")) {
                spaces.set(i, "\u001B[34m" + spaces.get(i) + "\u001B[0m");
            }
        }

        useful.clearScreen();
        useful.print("       |       |       ");
        useful.print("   " +  spaces.get(0) + "   |   " + spaces.get(1) + "   |   " + spaces.get(2) + "   ");
        useful.print("      " + amount.get(0) + "|      " + amount.get(1) + "|      " + amount.get(2));
        useful.print("-----------------------");
        useful.print("       |       |       ");
        useful.print("   " +  spaces.get(3) + "   |   " + spaces.get(4) + "   |   " + spaces.get(5) + "   ");
        useful.print("      " + amount.get(3) + "|      " + amount.get(4) + "|      " + amount.get(5));
        useful.print("-----------------------");
        useful.print("       |       |       ");
        useful.print("   " +  spaces.get(6) + "   |   " + spaces.get(7) + "   |   " + spaces.get(8) + "   ");
        useful.print("      " + amount.get(6) + "|      " + amount.get(7) + "|      " + amount.get(8));
        
    }

    public static void reset() {
        useful.clearScreen();
        spaces.clear();
        for(int i = 0; i < 9; i++) {
            spaces.add(" ");
        }
        amount.clear();
        for(int i = 0; i < 9; i++) {
            amount.add("0");
        }
        setBoard();
        rockSpaces.clear();
        for(int i = 0; i < 9; i++) {
            rockSpaces.add(i+1);
        }
        paperSpaces.clear();
        for(int i = 0; i < 9; i++) {
            paperSpaces.add(i+1);
        }
        scissorsSpaces.clear();
        for(int i = 0; i < 9; i++) {
            scissorsSpaces.add(i+1);
        }
        firstRound = true;
    }

    public static void turn(String player) {
        System.out.print(player + "'s Move: ");
        boolean valid = false;
        int userMove = -1;
        while (!valid) {
            String userMoveString = test.nextLine();
            try {
                userMove = Integer.valueOf(userMoveString);
            }
            catch (Exception e){

            }
            if (player == "Rock") {
                for (int i = 0; i < rockSpaces.size(); i++) {
                    if (rockSpaces.get(i) == null) {

                    } else if (userMove == rockSpaces.get(i)) {
                        valid = true;
                    }
                }
            } else if (player == "Paper") {
                for (int i = 0; i < paperSpaces.size(); i++) {
                    if (paperSpaces.get(i) == null) {

                    } else if (userMove == paperSpaces.get(i)) {
                        valid = true;
                    }
                }
            } else {
                for (int i = 0; i < scissorsSpaces.size(); i++) {
                    if (scissorsSpaces.get(i) == null) {

                    } else if (userMove == scissorsSpaces.get(i)) {
                        valid = true;
                    }
                }
            }
            if (!valid) {
                useful.print("Not a valid space. Try again: ");
            }
        }
        move((userMove-1), player.substring(0, 1));
        setBoard();
    }

    public static void move(int space, String type) {
        spaces.set(space, type);
        String currentAmount = amount.get(space);
        String setAmount = "0";
        if (type.equals("R")) {
            rockSpaces.set(space, null);
            scissorsSpaces.set(space, null);
            if (firstRound) {
                paperSpaces.set(space, null);
            } else {
                paperSpaces.set(space, space+1);
            }
        } else if (type.equals("P")) {
            rockSpaces.set(space, null);
            if (firstRound) {
                scissorsSpaces.set(space, null);
            } else {
                scissorsSpaces.set(space, space+1);
            }
            paperSpaces.set(space, null);
        } else if (type.equals("S")) {
            if (firstRound) {
                rockSpaces.set(space, null);
            } else {
                rockSpaces.set(space, space+1);
            }
            scissorsSpaces.set(space, null);
            paperSpaces.set(space, null);
        }
        if (currentAmount == "0") {
            setAmount = "1";
        } else if (currentAmount == "1") {
            setAmount = "2";
        } else{
            setAmount = "3";
            rockSpaces.set(space, null);
            paperSpaces.set(space, null);
            scissorsSpaces.set(space, null);
        }

        
        amount.set(space, setAmount);
    }

    public static void winBoard(int winType) {
        for (int i = 0; i < 9; i++) {
            if (amount.get(i).equals("3")) {
                spaces.set(i, "\u001B[34m" + spaces.get(i) + "\u001B[0m");
            }
        }
        useful.clearScreen();
        if (winType == 1) {
            useful.print("       |       |       ");
            useful.print("---" +  spaces.get(0) + "---|---" + spaces.get(1) + "---|---" + spaces.get(2) + "---");
            useful.print("      " + amount.get(0) + "|      " + amount.get(1) + "|      " + amount.get(2));
            useful.print("-----------------------");
            useful.print("       |       |       ");
            useful.print("   " +  spaces.get(3) + "   |   " + spaces.get(4) + "   |   " + spaces.get(5) + "   ");
            useful.print("      " + amount.get(3) + "|      " + amount.get(4) + "|      " + amount.get(5));
            useful.print("-----------------------");
            useful.print("       |       |       ");
            useful.print("   " +  spaces.get(6) + "   |   " + spaces.get(7) + "   |   " + spaces.get(8) + "   ");
            useful.print("      " + amount.get(6) + "|      " + amount.get(7) + "|      " + amount.get(8));
        } else if (winType == 2) {
            useful.print("       |       |       ");
            useful.print("   " +  spaces.get(0) + "   |   " + spaces.get(1) + "   |   " + spaces.get(2) + "   ");
            useful.print("      " + amount.get(0) + "|      " + amount.get(1) + "|      " + amount.get(2));
            useful.print("-----------------------");
            useful.print("       |       |       ");
            useful.print("---" +  spaces.get(3) + "---|---" + spaces.get(4) + "---|---" + spaces.get(5) + "---");
            useful.print("      " + amount.get(3) + "|      " + amount.get(4) + "|      " + amount.get(5));
            useful.print("-----------------------");
            useful.print("       |       |       ");
            useful.print("   " +  spaces.get(6) + "   |   " + spaces.get(7) + "   |   " + spaces.get(8) + "   ");
            useful.print("      " + amount.get(6) + "|      " + amount.get(7) + "|      " + amount.get(8));
        } else if (winType == 3) {
            useful.print("       |       |       ");
            useful.print("   " +  spaces.get(0) + "   |   " + spaces.get(1) + "   |   " + spaces.get(2) + "   ");
            useful.print("      " + amount.get(0) + "|      " + amount.get(1) + "|      " + amount.get(2));
            useful.print("-----------------------");
            useful.print("       |       |       ");
            useful.print("   " +  spaces.get(3) + "   |   " + spaces.get(4) + "   |   " + spaces.get(5) + "   ");
            useful.print("      " + amount.get(3) + "|      " + amount.get(4) + "|      " + amount.get(5));
            useful.print("-----------------------");
            useful.print("       |       |       ");
            useful.print("---" +  spaces.get(6) + "---|---" + spaces.get(7) + "---|---" + spaces.get(8) + "---");
            useful.print("      " + amount.get(6) + "|      " + amount.get(7) + "|      " + amount.get(8));
        } else if (winType == 4) {
            useful.print("   |   |       |       ");
            useful.print("   " +  spaces.get(0) + "   |   " + spaces.get(1) + "   |   " + spaces.get(2) + "   ");
            useful.print("   |  " + amount.get(0) + "|      " + amount.get(1) + "|      " + amount.get(2));
            useful.print("-----------------------");
            useful.print("   |   |       |       ");
            useful.print("   " +  spaces.get(3) + "   |   " + spaces.get(4) + "   |   " + spaces.get(5) + "   ");
            useful.print("   |  " + amount.get(3) + "|      " + amount.get(4) + "|      " + amount.get(5));
            useful.print("-----------------------");
            useful.print("   |   |       |       ");
            useful.print("   " +  spaces.get(6) + "   |   " + spaces.get(7) + "   |   " + spaces.get(8) + "   ");
            useful.print("   |  " + amount.get(6) + "|      " + amount.get(7) + "|      " + amount.get(8));
        } else if (winType == 5) {
            useful.print("       |   |   |       ");
            useful.print("   " +  spaces.get(0) + "   |   " + spaces.get(1) + "   |   " + spaces.get(2) + "   ");
            useful.print("      " + amount.get(0) + "|   |  " + amount.get(1) + "|      " + amount.get(2));
            useful.print("-----------------------");
            useful.print("       |   |   |       ");
            useful.print("   " +  spaces.get(3) + "   |   " + spaces.get(4) + "   |   " + spaces.get(5) + "   ");
            useful.print("      " + amount.get(3) + "|   |  " + amount.get(4) + "|      " + amount.get(5));
            useful.print("-----------------------");
            useful.print("       |   |   |       ");
            useful.print("   " +  spaces.get(6) + "   |   " + spaces.get(7) + "   |   " + spaces.get(8) + "   ");
            useful.print("      " + amount.get(6) + "|   |  " + amount.get(7) + "|      " + amount.get(8));
        } else if (winType == 6) {
            useful.print("       |       |   |   ");
            useful.print("   " +  spaces.get(0) + "   |   " + spaces.get(1) + "   |   " + spaces.get(2) + "   ");
            useful.print("      " + amount.get(0) + "|      " + amount.get(1) + "|   |  " + amount.get(2));
            useful.print("-----------------------");
            useful.print("       |       |   |   ");
            useful.print("   " +  spaces.get(3) + "   |   " + spaces.get(4) + "   |   " + spaces.get(5) + "   ");
            useful.print("      " + amount.get(3) + "|      " + amount.get(4) + "|   |  " + amount.get(5));
            useful.print("-----------------------");
            useful.print("       |       |   |   ");
            useful.print("   " +  spaces.get(6) + "   |   " + spaces.get(7) + "   |   " + spaces.get(8) + "   ");
            useful.print("      " + amount.get(6) + "|      " + amount.get(7) + "|   |  " + amount.get(8));
        } else if (winType == 7) {
            useful.print(" \\     |       |       ");
            useful.print("   " +  spaces.get(0) + "   |   " + spaces.get(1) + "   |   " + spaces.get(2) + "   ");
            useful.print("     \\" + amount.get(0) + "|      " + amount.get(1) + "|      " + amount.get(2));
            useful.print("-----------------------");
            useful.print("       | \\     |       ");
            useful.print("   " +  spaces.get(3) + "   |   " + spaces.get(4) + "   |   " + spaces.get(5) + "   ");
            useful.print("      " + amount.get(3) + "|     \\" + amount.get(4) + "|      " + amount.get(5));
            useful.print("-----------------------");
            useful.print("       |       | \\     ");
            useful.print("   " +  spaces.get(6) + "   |   " + spaces.get(7) + "   |   " + spaces.get(8) + "   ");
            useful.print("      " + amount.get(6) + "|      " + amount.get(7) + "|     \\" + amount.get(8));
        } else {
            useful.print("       |       |     / ");
            useful.print("   " +  spaces.get(0) + "   |   " + spaces.get(1) + "   |   " + spaces.get(2) + "   ");
            useful.print("      " + amount.get(0) + "|      " + amount.get(1) + "| /    " + amount.get(2));
            useful.print("-----------------------");
            useful.print("       |     / |       ");
            useful.print("   " +  spaces.get(3) + "   |   " + spaces.get(4) + "   |   " + spaces.get(5) + "   ");
            useful.print("      " + amount.get(3) + "| /    " + amount.get(4) + "|      " + amount.get(5));
            useful.print("-----------------------");
            useful.print("     / |       |       ");
            useful.print("   " +  spaces.get(6) + "   |   " + spaces.get(7) + "   |   " + spaces.get(8) + "   ");
            useful.print(" /    " + amount.get(6) + "|      " + amount.get(7) + "|      " + amount.get(8));
        }
        
    }

    public static boolean checkWin(String player) {

        for (int i = 0; i < 7; i += 3) {
            if ((spaces.get(i).equals(spaces.get(i+1))) && (spaces.get(i+1).equals(spaces.get(i+2))) && (spaces.get(i) != " ")) {
                if (i == 0) {
                    winBoard(1);
                } else if (i == 3) {
                    winBoard(2);
                } else {
                    winBoard(3);
                }
                useful.print(player + " Wins!");
                return true;
            }
        }

        for (int i = 0; i < 3; i ++) {
            if ((spaces.get(i).equals(spaces.get(i+3))) && (spaces.get(i+3).equals(spaces.get(i+6))) && (spaces.get(i) != " ")) {
                winBoard(i+4);
                useful.print(player + " Wins!");
                return true;
            }
        }

        if ((spaces.get(0).equals(spaces.get(4))) && (spaces.get(4).equals(spaces.get(8))) && (spaces.get(0) != " ")) {
            winBoard(7);
            useful.print(player + " Wins!");
            return true;
        }

        if ((spaces.get(2).equals(spaces.get(4))) && (spaces.get(4).equals(spaces.get(6))) && (spaces.get(2) != " ")) {
            winBoard(8);
            useful.print(player + " Wins!");
            return true;
        }
        return false;
    }

    public static void game() {
        reset();
        win = false;
        String player = "Rock";
        int turnCount = 0;
        while (!win){
            turn(player);
            win = checkWin(player);
            if (player == "Rock") {
                player = "Paper";
            } else if (player == "Paper") {
                player = "Scissors";
            } else {
                player = "Rock";
            }
            turnCount++;
            if (turnCount == 3) {
                firstRound = false;
                for (int i = 0; i < 9; i++) {
                    if (spaces.get(i).equals("R")) {
                        paperSpaces.set(i, i+1);
                    } else if (spaces.get(i).equals("P")) {
                        scissorsSpaces.set(i, i+1);
                    } else {
                        rockSpaces.set(i, i+1);
                    }
                }
            }
        }
    }
    
    public static ArrayList<String> spaces = new ArrayList<>();
    public static ArrayList<String> amount = new ArrayList<>();
    public static ArrayList<Integer> rockSpaces = new ArrayList<>();
    public static ArrayList<Integer> paperSpaces = new ArrayList<>();
    public static ArrayList<Integer> scissorsSpaces = new ArrayList<>();
    public static boolean win = false;
    public static Scanner test = new Scanner(System.in);
    public static boolean play = true;
    public static boolean firstRound = true;
    public static void main(String[] args) throws InterruptedException{
        while (play) {
            game();
            useful.print("Play again:");
            String playInput = " ";
            boolean inputValid = ((playInput.equals("yes") || playInput.equals("Yes") || playInput.equals("y") || playInput.equals("Y") || playInput.equals("no") || playInput.equals("No") || playInput.equals("n") || playInput.equals("N")));
            while (!inputValid) {
                playInput = test.nextLine();
                inputValid = ((playInput.equals("yes") || playInput.equals("Yes") || playInput.equals("y") || playInput.equals("Y") || playInput.equals("no") || playInput.equals("No") || playInput.equals("n") || playInput.equals("N")));
                if (!inputValid && !playInput.equals("")) {
                    useful.print("Not a valid answer. Try again: ");
                }
            }
            if (playInput.equals("no") || playInput.equals("No") || playInput.equals("n") || playInput.equals("N")) {
                play = false;
            }
        }
    }
}
