package com.mock.service;

import com.mock.dto.request.UserDTO;
import com.mock.dto.response.UserResponse;
import org.springframework.stereotype.Service;

@Service
public interface UserService {
    public UserResponse createUser(UserDTO request);
}
