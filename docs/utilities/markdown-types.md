---
title: Guía Completa de Format de Discord (Markdown, Sintaxis y Colores)
description: Referencia completa de sintaxis Markdown, formateo de texto, menciones, enlaces, timestamps y resaltado de código en Discord.
---

# Guía de Formato y Markdown en Discord

Referencia técnica completa para dar formato a mensajes en Discord mediante Markdown, bloques de código, menciones, timestamps y resaltado de texto con colores.

## Formato de Texto Básico

Discord permite aplicar estilos de texto estándar utilizando caracteres especiales.

| Estilo | Sintaxis |
| :--- | :--- |
| Cursiva | `*cursiva*` o `_cursiva_` |
| Negrita | `**negrita**` |
| Negrita Cursiva | `***negrita cursiva***` |
| Subrayado | `__subrayado__` |
| Subrayado Cursiva | `__*subrayado cursiva*__` |
| Subrayado Negrita | `__**subrayado negrita**__` |
| Subrayado Negrita Cursiva | `__***subrayado negrita cursiva***__` |
| Tachado | `~~tachado~~` |
| Spoiler | `||spoiler||` |
| Código en línea | `` `código en línea` `` |
| Código en línea con comillas | `\`\`código con ` adentro\`\` ` |

## Elementos de Estructura y Bloques

Los bloques y la estructura del texto se organizan mediante caracteres al inicio de cada línea.

* **Encabezados:** Usan `#`, `##` o `###` seguidos de espacio.
* **Subtexto:** Usa `-# subtexto` para renderizar texto más pequeño.
* **Citas simples:** Usa `> cita` para citar una línea.
* **Citas multilínea:** Usa `>>> cita multilínea` para incluir todo el texto posterior.
* **Listas no ordenadas:** Usa `-` o `*`. Para anidar, usa 2 espacios antes del guion (`  -`).
* **Listas ordenadas:** Usa números seguidos de punto (ej. `1.`). Para anidar, aplica 2 espacios de sangría (`  1.`).

## Enlaces y Escape de Caracteres

### Enlaces

* **Enlace con texto:** `[texto](https://url)`
* **Enlace sin vista previa (embed):** `[texto](<https://url>)` o `<https://url>`
* **Enlace directo a mensaje o canal:** `<discord://-/channels/GUILD_ID/CHANNEL_ID/MESSAGE_ID>`

### Escape de Caracteres
Para evitar que Discord interprete un carácter de formato, antepone una barra invertida `\`:

```text
\*literal\*
\@usuario
\:emoji\:

```

## Menciones y Navegación Interna

### Menciones

| Tipo | Sintaxis | Notas |
| --- | --- | --- |
| Usuario | `<@USER_ID>` |  |
| Canal | `<#CHANNEL_ID>` |  |
| Rol | `<@&ROLE_ID>` |  |
| Global / Canal | `@everyone`, `@here` |  |
| Comando de aplicación | `</comando:COMMAND_ID>` |  |
| Comando con subcomando | `</comando subcomando:ID>` |  |
| Comando con grupo y subcomando | `</comando grupo subcomando:ID>` |  |

### Navegación del Servidor

Puedes crear enlaces directos a secciones específicas del servidor usando las siguientes etiquetas:

* `<id:customize>`
* `<id:browse>`
* `<id:guide>`
* `<id:linked-roles>`
* `<id:linked-roles:ROLE_ID>`

::: tip RECOMENDACIÓN
Usa las etiquetas de navegación `<id:...>` para guiar a los nuevos miembros en canales de bienvenida o reglas sin depender de URLs externas.
:::

## Emojis y Sonidos

* **Emoji estándar:** `:nombre:`
* **Emoji personalizado:** `<:nombre:ID>`
* **Emoji animado:** `<a:nombre:ID>`
* **Sonido de Soundboard:** `<sound:GUILD_ID:SOUND_ID:>`

## Timestamps (Fechas y Horas Dinámicas)

Las marcas de tiempo de Discord se adaptan automáticamente a la zona horaria de cada usuario. Se definen mediante la sintaxis `<t:UNIX>` o `<t:UNIX:ESTILO>`, donde `UNIX` es el timestamp en segundos.

| Estilo | Sintaxis | Formato de Salida (Ejemplo) |
| --- | --- | --- |
| `t` | `<t:UNIX:t>` | 16:20 |
| `T` | `<t:UNIX:T>` | 16:20:30 |
| `d` | `<t:UNIX:d>` | 20/04/2021 |
| `D` | `<t:UNIX:D>` | April 20, 2021 |
| `f` | `<t:UNIX:f>` | April 20, 2021 at 16:20 *(por defecto)* |
| `F` | `<t:UNIX:F>` | Tuesday, April 20, 2021 at 16:20 |
| `s` | `<t:UNIX:s>` | 20/04/2021, 16:20 |
| `S` | `<t:UNIX:S>` | 20/04/2021, 16:20:30 |
| `R` | `<t:UNIX:R>` | 4 years ago *(tiempo relativo)* |

<sub>Página recomendada para crear timestamps: [HammerTime](https://hammertime.cyou/es)</sub>

## Bloques de Código y Resaltado de Sintaxis

### Sintaxis General

Para crear bloques de código se utilizan tres comillas invertidas (```). Para incluir un bloque de código dentro de otro (anidado), se deben usar 4 comillas invertidas ``````:

* **Bloque simple sin resaltado**

```
Texto simple
```

* **Bloque con resaltado de sintaxis Python**

```python
print("Hola mundo")
```

### Formato de Color por Lenguaje (Trucos de Sintaxis)

Puedes simular texto en color en Discord aprovechando la sintaxis de ciertos lenguajes de programación:

* **Verde / Rojo (con `diff`):**
```diff
+ Texto en verde
- Texto en rojo
! Texto en naranja
# Texto en gris

```


* **Ámbar / Amarillo (con `fix`):**
```fix
todo el texto se renderiza en ámbar

```


* **Estilos CSS (`css`):**
```css
.selector { valor: color; }

```


* **Estructuras YAML (`yaml`):**
```yaml
clave: valor

```


* **Estructuras INI (`ini`):**
```ini
[seccion]

```


* **Estructuras JSON (`json`):**
```json
{"clave": "valor"}

```

::: details Ver lista completa de lenguajes soportados

```
`html`, `xml`, `svg`, `css`, `scss`, `sass`, `less`, `stylus`, `javascript`, `js`, `typescript`, `ts`, `jsx`, `tsx`, `vue`, `json`, `json5`, `graphql`, `python`, `py`, `java`, `kotlin`, `kt`, `scala`, `groovy`, `c`, `cpp`, `csharp`, `cs`, `objectivec`, `go`, `rust`, `rs`, `swift`, `dart`, `zig`, `php`, `ruby`, `rb`, `perl`, `lua`, `elixir`, `erlang`, `haskell`, `clojure`, `fsharp`, `ocaml`, `elm`, `crystal`, `julia`, `r`, `matlab`, `fortran`, `vbnet`, `pascal`, `ada`, `cobol`, `lisp`, `scheme`, `prolog`, `smalltalk`, `bash`, `sh`, `shell`, `zsh`, `powershell`, `ps1`, `bat`, `cmd`, `dockerfile`, `makefile`, `nginx`, `apache`, `cmake`, `ini`, `toml`, `yaml`, `yml`, `properties`, `diff`, `patch`, `http`, `ansi`, `sql`, `plsql`, `pgsql`, `mysql`, `cypher`, `sparql`, `protobuf`, `markdown`, `md`, `asciidoc`, `rst`, `latex`, `tex`, `bibtex`, `arm`, `x86asm`, `autohotkey`, `brainfuck`, `excel`, `gcode`, `glsl`, `wasm`, `nim`, `nix`, `puppet`, `twig`, `handlebars`, `pug`, `haml`, `vim`, `awk`, `sed`, `gradle`, `coffeescript`, `actionscript`, `haxe`.
:::

### Formato de Color Avanzado con Secuencias ANSI

Discord admite bloques de código con formato ANSI nativo usando la etiqueta.

```ansi
ESC[1;31mtexto rojo negritaESC[0m
```

::: warning ADVERTENCIA
El carácter `ESC` corresponde al byte literal `U+001B` (`\u001b` / `\x1b`). No debe escribirse textualmente la palabra "ESC".
:::

**Sintaxis del comando ANSI:** `ESC` + `[` + `código(s) separados por ;` + `m`

| Tipo           | Código | Descripción           |
|----------------|--------|-----------------------|
| **Estilo**     | `0`    | Restablecer formato   |
|                | `1`    | Negrita               |
|                | `4`    | Subrayado             |
| **Color de Texto** | `30` | Gris                  |
|                | `31`   | Rojo                  |
|                | `32`   | Verde                 |
|                | `33`   | Amarillo              |
|                | `34`   | Azul                  |
|                | `35`   | Rosa / Magenta        |
|                | `36`   | Cian                  |
|                | `37`   | Blanco                |
| **Color de Fondo** | `40` | Azul oscuro           |
|                | `41`   | Naranja               |
|                | `42`   | Gris azulado          |
|                | `43`   | Turquesa              |
|                | `44`   | Gris                  |
|                | `45`   | Índigo                |
|                | `46`   | Gris claro            |
|                | `47`   | Crema                 |

```

```json
{
  "suggested_file": "discord-markdown-guia.md",
  "suggested_folder": "docs/guias/",
  "config_mjs_entry": {
    "text": "Sintaxis de Discord",
    "link": "/guias/discord-markdown-guia"
  }
}

```