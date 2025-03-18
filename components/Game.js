/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const initialBoard = [
    ['','',''],
    ['','',''],
    ['','',''],
];

const Game = () => {
    const [board, setBoard] = useState(initialBoard);
    const [player, setPlayer] = useState('X');
    const [winner, setWinner] = useState('');

    const checkWinner = () => {
        for (let i = 0; i < 3; i++) {
            if (board[i][0] !== '' && board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
                setWinner(board[i][0]);
                return;
            }
        }
        for (let i = 0; i < 3; i++) {
            if (board[0][i] !== '' && board[0][i] === board[1][i] && board[0][i] === board[2][i]) {
                setWinner(board[0][i]);
                return;
            }
        }
        if (board[0][0] !== '' && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
            setWinner(board[0][0]);
        } else if (board[0][2] !== '' && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
            setWinner(board[0][2]);
        }
    };

    const resetBoard = () => {
        setBoard(initialBoard);
        setPlayer('X');
        setWinner('');
    };

    useEffect(() => {
        checkWinner();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [board]);

    useEffect(() => {
        if (winner) {
            Alert.alert(`Player ${winner} won`);
            resetBoard();
        }
    }, [winner]);
    useEffect(() =>{
         if(!winner)
         {
            const isBoardFull = board.every((row) => row.every((cell) => cell != '') );
            if(isBoardFull)
            {
                Alert.alert("getting tiee!!!");
                resetBoard();
            }
         }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[board]);

    const onBlockClick = (rowIndex, cellIndex) => {
        if (board[rowIndex][cellIndex] === '' && !winner) {
            const newBoard = board.map((row, r) =>
                row.map((cell, c) => (r === rowIndex && c === cellIndex ? player : cell))
            );
            setBoard(newBoard);
            setPlayer(player === 'X' ? 'O' : 'X');
        }
         else if(!winner && board[rowIndex][cellIndex] !== ''){
            Alert.alert("getting tiee!!!");
             resetBoard();
        }
    };

    return (
        <View style={styles.box}>
            {board.map((row, rowIndex) => (
                <View key={rowIndex} style={styles.row}>
                    {row.map((cell, cellIndex) => (
                        <TouchableOpacity
                            key={cellIndex}
                            style={styles.cell}
                            onPress={() => onBlockClick(rowIndex, cellIndex)}
                        >
                            <Text>{cell}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    box: {
        height: 300,
        width: 300,
        borderWidth: 1,
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
    },
    cell: {
        width: 100,
        height: 100,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Game;
