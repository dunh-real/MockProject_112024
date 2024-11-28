package com.mock.controller;

import com.mock.dto.request.AuthenticatedRequest;
import com.mock.dto.request.IntrospectRequest;
import com.mock.dto.request.UserDTO;
import com.mock.dto.response.AuthenticationResponse;
import com.mock.dto.response.IntrospectResponse;
import com.mock.dto.response.UserResponse;
import com.mock.helper.ResponseObject;
import com.mock.service.AuthenticatedService;
import com.mock.service.UserService;
import com.nimbusds.jose.JOSEException;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE,makeFinal = true)
public class UserController {
    AuthenticatedService authenticationService;
    UserService userService;

    @PostMapping("/login")
    ResponseObject<AuthenticationResponse> logIn(@RequestBody AuthenticatedRequest request){
        var result = authenticationService.authenticate(request);
        return ResponseObject.<AuthenticationResponse>builder()
                .message("SUCCESS")
                .code(200)
                .data(result)
                .build();
    }
    @PostMapping("/signup")
    ResponseObject<UserResponse> signUp(@RequestBody UserDTO request){
        var result = userService.createUser(request);
        return ResponseObject.<UserResponse>builder()
                .message("SUCCESS")
                .code(200)
                .data(result)
                .build();
    }

    @PostMapping("/introspect")
    ResponseObject<IntrospectResponse> logIn(@RequestBody IntrospectRequest request) throws ParseException, JOSEException {
        var result = authenticationService.introspect(request);
        return ResponseObject.<IntrospectResponse>builder()
                .message("SUCCESS")
                .code(200)
                .data(result)
                .build();
    }

}
