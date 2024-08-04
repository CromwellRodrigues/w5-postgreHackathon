```mermaid

erDiagram
    ARTIST {
        int id PK "Primary Key"
        string name
    }
    ALBUM {
        int id PK "Primary Key"
        string title
        date published_date
        int artist_id FK "Foreign Key"
    }
    ARTIST ||--o{ ALBUM : has
