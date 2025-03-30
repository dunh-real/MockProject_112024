package com.mock.dto.response;

import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.Date;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class UserResponse {
    String name;
    String phoneNumber;
    String email;
    Date dob;
    String address;
    String role;
    String password;
}
