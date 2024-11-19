package com.mock.service.impl;

import com.mock.dto.request.UserDTO;
import com.mock.dto.response.UserResponse;
import com.mock.entity.User;
import com.mock.mapper.UserMapper;
import com.mock.repo.UserRepository;
import com.mock.service.UserService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@Slf4j
public class UserServiceImpl implements UserService {
    UserRepository userRepository;
    UserMapper userMapper;

    @Override
    public UserResponse createUser(UserDTO request) {
        User user = userMapper.toUser(request);
        user.setRole("USER");
        userRepository.save(user);
        return userMapper.toUserResponse(user);
    }
}
