package com.sobczyszyn.backend;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.authentication.HttpStatusEntryPoint;


@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    private final CustomAuthenticationProvider authProvider;
    private final MyBasicAuthenticationEntryPoint authenticationEntryPoint;

    public SecurityConfig(CustomAuthenticationProvider authProvider, MyBasicAuthenticationEntryPoint authenticationEntryPoint) {
        this.authProvider = authProvider;
        this.authenticationEntryPoint = authenticationEntryPoint;
    }


    @Override
    protected void configure(AuthenticationManagerBuilder auth) {
        auth.authenticationProvider(authProvider);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.httpBasic()
                .and()
                .csrf().disable()
                .authorizeRequests()
                .antMatchers("/user/**").authenticated()
                .anyRequest().permitAll()
                .and()
                .logout()
                .permitAll()
                .and()
                .exceptionHandling()
                .authenticationEntryPoint(authenticationEntryPoint);
        http.cors();

    }

}
