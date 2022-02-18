FROM golang:1.17 as builder

WORKDIR /usr/src/app

RUN go mod init go-challenge
COPY . .
RUN go build -v -o /usr/local/bin/app .


FROM scratch
COPY --from=builder /usr/local/bin/app .
CMD ["./app"]