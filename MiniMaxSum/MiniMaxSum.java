package MiniMaxSum;
import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.function.*;
import java.util.regex.*;
import java.util.stream.*;
import static java.util.stream.Collectors.joining;
import static java.util.stream.Collectors.toList;

class Result {
    /*
     * Complete the 'miniMaxSum' function below.
     *
     * The function accepts INTEGER_ARRAY arr as parameter.
     */

    public static void miniMaxSum(List<Integer> arr) {
    // Write your code here
    
    for (int i = 0; i < arr.size(); i++) {
        // note: since we're working with List<Integer>, we must use .get() method to access elements of a List
        // useful List methods: .get(), .set()
        // Resource: List methods: https://docs.oracle.com/javase%2F8%2Fdocs%2Fapi%2F%2F/java/util/List.html
        for (int j = 0; j < arr.size() - 1 - i; j++) {
            if (arr.get(j) >= arr.get(j + 1)) {
                int temp = arr.get(j);
                arr.set(j, arr.get(j + 1));
                arr.set(j + 1, temp);
            }
        }
    }

    int min = 0; 
    int max = 0;

    for (int i = 0; i < arr.size() - 1; i++) {
        min += arr.get(i);
    }

    for (int i = 1; i < arr.size(); i++) {
        max += arr.get(i);
    }

    System.out.print(min + " " + max);

    }
}

public class MiniMaxSum {
    public static void main(String[] args) {
        List<Integer> arr = Arrays.asList(7, 69, 2, 221, 8974);
        Result.miniMaxSum(arr);
    }
}


