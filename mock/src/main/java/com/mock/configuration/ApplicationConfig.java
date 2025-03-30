package com.mock.configuration;

import com.mock.entity.User;
import com.mock.repo.UserRepository;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@Slf4j
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE,makeFinal = true)
public class ApplicationConfig {
    PasswordEncoder passwordEncoder;

    @Bean
    ApplicationRunner applicationRunner(UserRepository userRepository) {
        return args -> {
            if ((userRepository.findByEmail("admin@gmail.com")) == null) {
                User user = User.builder()
                        .name("admin")
                        .email("admin@gmail.com")
                        .password(passwordEncoder.encode("admin"))
                        .role("ADMIN")
                        .build();
                userRepository.save(user);
                log.warn("Admin user has been created with default password: admin. Please change the password.");
            }
        };
    }

}
