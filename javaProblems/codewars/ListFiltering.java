package javaProblems.codewars;

import java.util.List;
import java.util.stream.Collectors;

public class ListFiltering {

    public static List<Object> filterList(final List<Object> list) {
        List<Object> filteredList = list
                .stream()
                .filter(obj -> !(obj instanceof String))
                .collect(Collectors.toList());
        return filteredList;
    }

    public static void main(String[] args) {
        System.out.println(filterList(List.of(1, 2, "a", "b")));// List.of(1,2)
        System.out.println(filterList(List.of(1, 2, "a", "b", 0, 15)));// List.of(1,2,0,15)
        System.out.println(filterList(List.of(1, 2, "a", "b", "aasf", "1", "123", 231)));// List.of(1, 2, 231)

    }
}