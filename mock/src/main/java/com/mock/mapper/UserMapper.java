package com.mock.mapper;

import com.mock.dto.request.UserDTO;
import com.mock.dto.response.UserResponse;
import com.mock.entity.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {
    User toUser(UserDTO request);
    UserResponse toUserResponse(User user);
}
