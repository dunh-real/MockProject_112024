package com.mock.helper;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class ResponseObject <T> {
    private String message;
    private int code;
    private T data;
}