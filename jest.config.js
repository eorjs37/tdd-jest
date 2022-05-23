module.exports = {
    moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "json"],
    testMatch: [
        "<rootDir>/**/*.test.(js|jsx|ts|tsx)",
        "<rootDir>/(tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))",
      ],
    transformIgnorePatterns: ["<rootDir>/node_modules/"],
}