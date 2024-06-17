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
     * Complete the 'plusMinus' function below.
     *
     * The function accepts INTEGER_ARRAY arr as parameter.
     */

    public static void plusMinus(List<Integer> arr) {
    // Write your code here
    
    int totalCount = arr.size();
    int posCount = 0;
    int negCount = 0;
    int zeroCount = 0;
    
    for (int i = 0; i < totalCount; i++) {
       if (arr.get(i) > 0) {
           posCount++;
       } else if (arr.get(i) < 0) {
           negCount++;
       } else {
           zeroCount++;
       }
    }

    System.out.print(String.format("%.6f%n", (double) posCount / totalCount));
    System.out.print(String.format("%.6f%n", (double) negCount / totalCount));
    System.out.print(String.format("%.6f%n", (double) zeroCount / totalCount));

    }

}

public class Solution {
    public static void main(String[] args) throws IOException {

        List<Integer> arr = Arrays.asList(-4, 3, -9, 0, 4, 1);

        Result.plusMinus(arr);

    }
}
